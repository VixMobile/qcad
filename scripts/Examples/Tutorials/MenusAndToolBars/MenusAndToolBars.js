/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */

include("../Tutorials.js");
 
function MenusAndToolBars(guiAction) {
    Tutorials.call(this, guiAction);
}

MenusAndToolBars.prototype = new Tutorials();

MenusAndToolBars.prototype.beginEvent = function() {
    Tutorials.prototype.beginEvent.call(this);

    var appWin = EAction.getMainWindow();
    appWin.handleUserMessage("MenusAndToolBars() is running...");
    
    this.terminate();
};

MenusAndToolBars.init = function(basePath) {
    var action = new RGuiAction("&Menus and Toolbars", RMainWindowQt.getMainWindow());
    action.setRequiresDocument(true);
    action.setScriptFile(basePath + "/MenusAndToolBars.js");
    action.setSortOrder(10);
    EAction.addGuiActionTo(action, Tutorials, true, false, false);
};
