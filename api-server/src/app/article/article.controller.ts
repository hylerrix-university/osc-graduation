import {
  Controller, Get, Post, Put, Delete,
  UsePipes, Body, Query, Param, UseGuards,
} from '@nestjs/common'

// import { ValidationPipe } from '../shared/validation.pipe'
// import { AuthGuard } from '../shared/auth.gaurd'
import { ArticleService } from './article.service'
import { CreateArticleDto, UpdateArticleDto, RemoveArticleDto } from './article.dto'

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  // 获取所有账号信息
  @Get()
  findAll(): object {
    return this.articleService.findAll()
  }

  // 新增一个账号信息
  @Post()
  async create(@Body() createArticleDto: CreateArticleDto): Promise<object> {
    return this.articleService.create(createArticleDto)
  }

  // 修改一个账号信息
  // @Put()
  // async update(@Body() updateArticleDto: UpdateArticleDto): Promise<object> {
  //   return this.articleService.update(updateArticleDto)
  // }

  // 删除一个账号信息
  @Delete()
  async remove(@Body() removeArticleDto: RemoveArticleDto): Promise<object> {
    return this.articleService.remove(removeArticleDto)
  }
}
