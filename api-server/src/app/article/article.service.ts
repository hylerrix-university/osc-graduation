import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ArticleEntity } from './article.entity'
import { CreateArticleDto, UpdateArticleDto, RemoveArticleDto } from './article.dto'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private articleRepository: Repository<ArticleEntity>,
  ) { }

  async findAll(page: number = 1) {
    const articles = await this.articleRepository.find()
    return { success: true, data: articles }
  }

  async create(createArticleDto: CreateArticleDto) {
    const article = await this.articleRepository.save({
      ...createArticleDto,
    })
    return { success: true }
  }

  // async update(updateArticleDto: UpdateArticleDto) {
  //   const article = await this.articleRepository.findOne({
  //     where: { id: updateArticleDto.id },
  //   })
  //   const updatedArticle = await this.articleRepository.update(article, {
  //     ...updateArticleDto,
  //   })
  //   return { success: true }
  // }

  async remove(removeArticleDto: RemoveArticleDto) {
    const article = await this.articleRepository.findOne({
      where: { id: removeArticleDto.id },
    })
    const deletedArticle = await this.articleRepository.remove(article)
    return { success: true }
  }
}
