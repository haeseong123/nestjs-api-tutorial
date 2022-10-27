import { UseGuards, Controller, Get, Post, Delete, Patch, Param, ParseIntPipe, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService) { }

    @Get()
    getBookmarks(
        @GetUser('id') userId: number
    ) {
        return this.bookmarkService.getBookmarks(
            userId
        )
    }

    @Get(':id')
    getBookmarksById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) bookmarkId: number
    ) {
        return this.bookmarkService.getBookmarksById(
            userId,
            bookmarkId
        )
    }

    @Post()
    createBookmarks(
        @GetUser('id') userId: number,
        @Body() dto: CreateBookmarkDto
    ) {
        return this.bookmarkService.createBookmarks(
            userId,
            dto
        )
    }

    @Patch(':id')
    editBookmarksById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) bookmarkId: number,
        @Body() dto: EditBookmarkDto
    ) {
        return this.bookmarkService.editBookmarksById(
            userId,
            bookmarkId,
            dto
        )
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    deleteBookmarksById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) bookmarkId: number
    ) {
        return this.bookmarkService.deleteBookmarksById(
            userId,
            bookmarkId
        )
    }

}
