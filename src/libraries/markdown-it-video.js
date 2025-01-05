// Source: https://github.com/vrcd-community/markdown-it-video/blob/master/index.js
/**
 * MIT License
 *
 * Copyright (c) 2017 Center for Open Science
 * Copyright (c) 2025 Vanza Setia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

// Process @[video](link to media file)
// Process @[audio](link to media file)

const EMBED_REGEX = /@\[([a-zA-Z].+)]\([\s]*(.*?)[\s]*[)]/im;

function videoEmbed(md, options) {
  function videoReturn(state, silent) {
    const theState = state;
    const oldPos = state.pos;

    if (
      state.src.charCodeAt(oldPos) !== 0x40 /* @ */ ||
      state.src.charCodeAt(oldPos + 1) !== 0x5b /* [ */
    ) {
      return false;
    }

    const match = EMBED_REGEX.exec(
      state.src.slice(state.pos, state.src.length)
    );

    if (!match || match.length < 3) {
      return false;
    }

    const service = match[1];
    let videoID = match[2];
    const serviceLower = service.toLowerCase();

    if (serviceLower === "audio" || serviceLower === "video") {
      // nothing to do
    } else if (!options[serviceLower]) {
      return false;
    }

    // If the videoID field is empty, regex currently make it the close parenthesis.
    if (videoID === ")") {
      videoID = "";
    }

    let serviceStart = oldPos + 2;
    let serviceEnd = md.helpers.parseLinkLabel(state, oldPos + 1, false);

    //
    // We found the end of the link, and know for a fact it's a valid link;
    // so all that's left to do is to call tokenizer.
    //
    if (!silent) {
      theState.pos = serviceStart;
      theState.service = theState.src.slice(serviceStart, serviceEnd);
      const newState = new theState.md.inline.State(
        service,
        theState.md,
        theState.env,
        []
      );
      newState.md.inline.tokenize(newState);

      const token = theState.push("video", "");
      token.videoID = videoID;
      token.service = service;
      token.url = match[2];
      token.level = theState.level;
    }

    theState.pos += theState.src.indexOf(")", theState.pos);
    return true;
  }

  return videoReturn;
}

function videoUrl(service, videoID) {
  switch (service) {
    case "video":
      return videoID;
    case "audio":
      return videoID;
    default:
      return service;
  }
}

function tokenizeVideo(md) {
  function tokenizeReturn(tokens, idx) {
    const videoID = md.utils.escapeHtml(tokens[idx].videoID);
    const service = md.utils.escapeHtml(tokens[idx].service).toLowerCase();

    if (service === "video" && videoID) {
      return `<div><video width="640" height="360" controls name="media">
          <source src="${videoID}">
        </video></div>`;
    }

    if (service === "audio" && videoID) {
      return `<div><audio controls name="media">
        <source src="${videoID}">
      </audio></div>`;
    }
  }

  return tokenizeReturn;
}

const defaults = {
  url: videoUrl
};

export default function (md, options) {
  let theOptions = options;
  if (theOptions) {
    Object.keys(defaults).forEach(function checkForKeys(key) {
      if (typeof theOptions[key] === "undefined") {
        theOptions[key] = defaults[key];
      }
    });
  } else {
    theOptions = defaults;
  }
  md.renderer.rules.video = tokenizeVideo(md, theOptions);
  md.inline.ruler.before("emphasis", "video", videoEmbed(md, theOptions));
}
