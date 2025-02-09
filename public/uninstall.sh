#!/bin/bash

set -e

APP_NAME="Rhyolite"
INSTALL_DIR="$HOME/.local/bin"
DESKTOP_FILE_DIR="$HOME/.local/share/applications"
ICON_DIR="$HOME/.local/share/icons"

echo "Uninstalling $APP_NAME..."

# Remove the binary
if [ -f "$INSTALL_DIR/$APP_NAME" ]; then
    rm "$INSTALL_DIR/$APP_NAME"
    echo "Removed binary from $INSTALL_DIR"
fi

# Remove the desktop entry
DESKTOP_FILE="$DESKTOP_FILE_DIR/$APP_NAME.desktop"
if [ -f "$DESKTOP_FILE" ]; then
    rm "$DESKTOP_FILE"
    echo "Removed desktop entry from $DESKTOP_FILE_DIR"
fi

# Remove the icon
ICON_FILE="$ICON_DIR/$APP_NAME.png"
if [ -f "$ICON_FILE" ]; then
    rm "$ICON_FILE"
    echo "Removed icon from $ICON_DIR"
fi

# Refresh desktop database
if command -v update-desktop-database >/dev/null 2>&1; then
    update-desktop-database "$HOME/.local/share/applications"
    echo "Updated desktop database"
fi

echo "$APP_NAME has been successfully uninstalled."