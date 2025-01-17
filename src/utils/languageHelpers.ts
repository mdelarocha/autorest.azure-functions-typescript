// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Languages, Language } from "@autorest/codemodel";

export function getLanguageMetadata(languages: Languages): Language {
  return languages.typescript || languages.javascript || languages.default;
}
