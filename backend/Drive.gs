/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.1.0
 * File: Drive.gs
 * ============================================================
 */

const Drive = {

  /**
   * Lists folders and files inside the configured root folder.
   */
  list(data = {}) {

    try {

      const folderId = data.folderId || CONFIG.ROOT_FOLDER_ID;

      Validation.required(folderId, "Folder ID");

      const folder = DriveApp.getFolderById(folderId);

      const folders = [];
      const files = [];

      const folderIterator = folder.getFolders();

      while (folderIterator.hasNext()) {
        const f = folderIterator.next();

        folders.push({
          id: f.getId(),
          name: f.getName(),
          url: f.getUrl()
        });
      }

      const fileIterator = folder.getFiles();

      while (fileIterator.hasNext()) {
        const f = fileIterator.next();

        files.push({
          id: f.getId(),
          name: f.getName(),
          type: f.getMimeType(),
          url: f.getUrl()
        });
      }

      return Response.success(
        {
          folder: {
            id: folder.getId(),
            name: folder.getName()
          },
          folders,
          files
        },
        "Folder contents retrieved successfully."
      );

    } catch (error) {

      LoggerService.error("Drive.list()", error);

      return Response.error(
        error.message,
        HTTP.INTERNAL_SERVER_ERROR
      );

    }

  }

};