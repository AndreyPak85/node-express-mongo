import { v4 as uuid } from 'uuid';
import * as path from 'path';

class FileService {
  async saveFile(file) {
    try {
      const fileName = uuid() + '.jpg';
      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      throw error;
    }
  }
}

export default new FileService();
