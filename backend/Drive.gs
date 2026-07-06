/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.2.0
 * File: Drive.gs
 * ============================================================
 */

const Drive = {

  /**
   * Lists folders and files inside a workspace folder.
   */
  list(data = {}) {

    try {

      const folderId = data.folderId || CONFIG.ROOT_FOLDER_ID;

      // Validate input
      Validation.required(folderId, "Folder ID");

      // Security
      Permissions.requireWorkspaceFolder(folderId);

      const folder = DriveApp.getFolderById(folderId);

      const folders = [];
      const files = [];

      // Collect folders
      const folderIterator = folder.getFolders();

      while (folderIterator.hasNext()) {

        const f = folderIterator.next();

        folders.push({
          id: f.getId(),
          name: f.getName(),
          url: f.getUrl()
        });

      }

      // Collect files
      const fileIterator = folder.getFiles();

      while (fileIterator.hasNext()) {

        const f = fileIterator.next();

        files.push({
          id: f.getId(),
          name: f.getName(),
          type: f.getMimeType(),
          size: f.getSize(),
          url: f.getUrl(),
          lastUpdated: f.getLastUpdated().toISOString()
        });

      }

      LoggerService.info("Drive.list()", {
        folderId,
        folders: folders.length,
        files: files.length
      });

      return Response.success(
        {
          folder: {
            id: folder.getId(),
            name: folder.getName(),
            url: folder.getUrl()
          },
          summary: {
            folders: folders.length,
            files: files.length
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