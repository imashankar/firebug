/* See license.txt for terms of usage */

define([
    "firebug/lib/trace",
],
function(FBTrace) {

// ********************************************************************************************* //
// Constants



// ********************************************************************************************* //
// Module

function SourceSearch(editor)
{
    this.editor = editor;
}

SourceSearch.prototype.findNext = function(text, options)
{
    var editor = this.editor.editorObject;
    var cursor = editor.getSearchCursor(text, 0, options.ignoreCase);
    cursor.find(options.backwards);
    editor.setSelection(cursor.from(), cursor.to());
    FBTrace.sysout("cursor", cursor);
};

// ********************************************************************************************* //
// Registration

return SourceSearch;

// ********************************************************************************************* //
});
