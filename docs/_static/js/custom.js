

/** Opens links to external docs in a new tab and links to docs internal to the repo in the current tab */

$(document).ready(function () {
   $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
});
