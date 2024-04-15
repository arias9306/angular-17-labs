import { Post } from '@angular-17-labs/db-typeOrm';
import { Controller, Get, Logger } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: PostsService,
    private readonly loggerService: Logger
  ) {}

  @Get()
  getPost(): Promise<Post[]> {
    this.loggerService.log(`Getting all posts`);
    return this.postService.getAllPost();
  }
}
