import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          console.log(req.body);
          const directoryPath = req.body.directoryPath || './uploads';
          cb(null, directoryPath);
        },
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file) {
    if (!file) {
      throw new HttpException('No file uploaded!', HttpStatus.BAD_REQUEST);
    }
    const filePath = `/${file.destination}/${file.filename}`;
    return { filePath, status: HttpStatus.OK };
  }
}
