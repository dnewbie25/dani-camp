# Changelog
All notable changes to this project will be documented in this file.

## [1.2.0] - 12-01-2024
### Added

- A new `Stroke Width` area, where you can select the stroke width from `1px` to `150px`

### Changed

- The `Eraser` button now deletes portions of the lines. You can set the width of the portions you want to delete
- The former `Eraser` button, which deleted all the canvas elements was changed and its functionality was assigned to the `Trash` button. It erases all the content when clicked, it is identified with a trash can icon.

## [1.1.0] - 11-22-2024
### Added

- There is a row with a color palette and an eraser button. Now you can choose which color to use to draw.
- The eraser will erase all the content on the canvas. It works by resetting a new canvas whose size is equal to the current canvas size.

### Changed

- The resizing was changed using the new function `setCanvasSize()` instead of `getMousePosition()`. The new function is also used when clicking `eraser` button to clear and get the current canvas size.

### Fixed

The resizing now uses a JavaScript approach to calculate the drawable area.

### Removed

CSS modified to have a darker brackground and some color in the button.

## [1.0.0] - 11-19-2024
### First working release

This is the first working version of `My Own Paint` app. The canvas is resizable, although when resized there is an offset between cursor and the line stroke.
