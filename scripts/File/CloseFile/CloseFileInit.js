function init(basePath) {
    var action = new RGuiAction(qsTranslate("CloseFile", "&Close"), RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/CloseFile.js");
    action.setIcon(basePath + "/CloseFile.svg");
    action.setDefaultShortcut(new QKeySequence(QKeySequence.Close));
    action.setDefaultCommands(["close"]);
    action.setSortOrder(1200);
    action.setNoState();
    EAction.addGuiActionTo(action, File, true);
}
