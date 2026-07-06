/**
 * ============================================================
 * TK Pro Enterprise OS
 * Version: 0.2.0
 * File: Permissions.gs
 * ============================================================
 */

const Permissions = {

  /**
   * Returns true if the folder exists.
   */
  folderExists(folderId) {
    try {
      DriveApp.getFolderById(folderId);
      return true;
    } catch (e) {
      return false;
    }
  },

  /**
   * Ensures the folder exists.
   */
  requireFolder(folderId) {

    Validation.required(folderId, "Folder ID");

    if (!this.folderExists(folderId)) {
      throw new Error("Folder does not exist.");
    }

    return true;

  },

  /**
   * Returns true if the folder is the configured root folder.
   */
  isRootFolder(folderId) {
    return folderId === CONFIG.ROOT_FOLDER_ID;
  },

  /**
   * Returns true if the folder belongs to the Enterprise workspace.
   * A folder is considered valid if it is the root folder
   * or any descendant of the root folder.
   */
  isWorkspaceFolder(folderId) {

    try {

      if (this.isRootFolder(folderId)) {
        return true;
      }

      let folder = DriveApp.getFolderById(folderId);

      while (true) {

        const parents = folder.getParents();

        if (!parents.hasNext()) {
          return false;
        }

        const parent = parents.next();

        if (parent.getId() === CONFIG.ROOT_FOLDER_ID) {
          return true;
        }

        folder = parent;

      }

    } catch (e) {

      return false;

    }

  },

  /**
   * Ensures the folder belongs to the Enterprise workspace.
   */
  requireWorkspaceFolder(folderId) {

    this.requireFolder(folderId);

    if (!this.isWorkspaceFolder(folderId)) {

      throw new Error(
        "Access denied. Folder is outside the TK Pro Enterprise OS workspace."
      );

    }

    return true;

  },

  /**
   * Ensures the file belongs to the Enterprise workspace.
   */
  requireWorkspaceFile(fileId) {

    Validation.required(fileId, "File ID");

    try {

      const file = DriveApp.getFileById(fileId);

      const parents = file.getParents();

      while (parents.hasNext()) {

        const parent = parents.next();

        if (this.isWorkspaceFolder(parent.getId())) {
          return true;
        }

      }

    } catch (e) {

      throw new Error("File does not exist.");

    }

    throw new Error(
      "Access denied. File is outside the TK Pro Enterprise OS workspace."
    );

  }

};