/* 
 * Opens links to external docs in a new tab and links to docs internal to the repo in the current tab.
 * This is to aid navigability. Code taken from:
 * https://stackoverflow.com/questions/11716781/open-a-link-in-a-new-window-in-restructuredtext.
 */
$(document).ready(function () {
   $('a[href^="http://"], a[href^="https://"]').not('a[class*=internal]').attr('target', '_blank');
});
