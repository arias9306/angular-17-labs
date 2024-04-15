import { Post } from '@angular-17-labs/db-typeOrm';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: Repository<Post>
  ) {}

  getAllPost(): Promise<Post[]> {
    return this.postsRepository.find();
  }
}
