import os.path
from uuid import uuid1


class FileService:
    @staticmethod
    def upload_goods_photo(instance, file: str):
        ext = file.split('.')[-1]
        return os.path.join('goods_photo', f'{uuid1()}.{ext}')