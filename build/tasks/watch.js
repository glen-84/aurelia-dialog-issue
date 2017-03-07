const del = require("del");
const fs = require("fs");
const gulp = require("gulp");
const logger = require("gulplog");
const path = require("path");

// Watch.
gulp.task("watch", () => {
    const watcher = gulp.watch("src/**/*.ts", gulp.registry().get("build:js"));

    watcher.on("all", (event, eventPath) => {
        switch (event) {
            case "unlink":
                const parentPath = path.dirname(eventPath);

                try {
                    // Only delete from the destination if the parent folder in the source still exists.
                    // If it doesn't, then the destination folder (and its contents) should have already been removed.
                    fs.lstatSync(parentPath);

                    // Log.
                    logger.info(`(${event}) ${eventPath}`);

                    // Get the relative source path.
                    let pathFromSrc = path.relative(path.resolve("src"), eventPath);

                    // Change extension from "ts" to "js".
                    pathFromSrc = pathFromSrc.substr(0, pathFromSrc.lastIndexOf(".")) + ".js";

                    // Delete the destination file.
                    del.sync(path.resolve("dist", pathFromSrc));
                } catch (err) {
                    if (err.code === "ENOENT" && err.path.endsWith(parentPath)) {
                        // Ignore missing parent folder.
                    } else {
                        throw err;
                    }
                }

                break;
            case "unlinkDir":
                // Log.
                logger.info(`(${event}) ${eventPath}`);

                // Get the relative source path.
                const pathFromSrc = path.relative(path.resolve("src"), eventPath);

                // Delete the destination folder.
                del.sync(path.resolve("dist", pathFromSrc));

                break;
            default:
                // Log.
                logger.info(`(${event}) ${eventPath}`);
        }
    });
});
