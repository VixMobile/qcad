CONFIG += plugin
TARGET = qcaddxf
include( ../../../shared.pri )

HEADERS = \
    RDxfExporter.h \
    RDxfExporterFactory.h \
    RDxfImporter.h \
    RDxfImporterFactory.h \
    RDxfPlugin.h
SOURCES = \
    RDxfExporter.cpp \
    RDxfExporterFactory.cpp \
    RDxfImporter.cpp \
    RDxfImporterFactory.cpp \
    RDxfPlugin.cpp
TEMPLATE = lib
DEFINES += QCADDXF_LIBRARY
DESTDIR = ../../../plugins
LIBS += -lqcadcore -lqcadentity -ldxflib -lqcadoperations

win32 {
    POST_TARGETDEPS += ../../../$$ROUTDIR/dxflib.lib
}
macx {
    POST_TARGETDEPS += ../../../$$ROUTDIR/libdxflib.a
}
linux {
    POST_TARGETDEPS += ../../../$$ROUTDIR/libdxflib.a
}
