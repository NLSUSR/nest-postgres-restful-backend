import * as NJSC from '@nestjs/common';
import * as FS from 'fs';
import * as PATH from 'path';
import { v4 } from 'uuid';
import { variables } from '../variables';

@NJSC.Injectable()
export class FilesService {
  async createFile(file: any): Promise<string> {
    try {
      const fileName = v4() + '.jpg';
      const filePath = PATH.resolve(__dirname, '..', 'static');
      if (!FS.existsSync(filePath)) {
        FS.mkdirSync(filePath, { recursive: true });
      }
      FS.writeFileSync(PATH.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (error) {
      console.error(error);

      throw new NJSC.HttpException(
        variables.messages.writeError + ' ' + error,
        NJSC.HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
