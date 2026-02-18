// Migration script to import existing data into Prisma/Supabase
// Usage: npx ts-node scripts/migrate-data.ts

import { prisma } from '../lib/prisma'
import { newsArticles } from '../app/data/news'
import { properties } from '../app/fastigheter/data'

async function migrateNews() {
  console.log('Migrating news articles...')
  
  for (const article of newsArticles) {
    try {
      await prisma.newsArticle.upsert({
        where: { slug: article.slug },
        update: {
          date: article.date,
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          featured: article.featured,
        },
        create: {
          slug: article.slug,
          date: article.date,
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          category: article.category,
          featured: article.featured,
        },
      })
      console.log(`✓ Migrated: ${article.title}`)
    } catch (error) {
      console.error(`✗ Failed to migrate: ${article.title}`, error)
    }
  }
  
  console.log('News migration complete!')
}

async function migrateProperties() {
  console.log('Migrating properties...')
  
  for (const property of properties) {
    try {
      await prisma.property.upsert({
        where: { propertyId: property.id },
        update: {
          name: property.name,
          address: property.address,
          area: property.area,
          latitude: property.coordinates[0],
          longitude: property.coordinates[1],
          apartments: property.apartments,
          apartmentTypes: property.apartmentTypes,
          description: property.description,
          image: property.image,
          features: property.features,
        },
        create: {
          propertyId: property.id,
          name: property.name,
          address: property.address,
          area: property.area,
          latitude: property.coordinates[0],
          longitude: property.coordinates[1],
          apartments: property.apartments,
          apartmentTypes: property.apartmentTypes,
          description: property.description,
          image: property.image,
          features: property.features,
        },
      })
      console.log(`✓ Migrated: ${property.name}`)
    } catch (error) {
      console.error(`✗ Failed to migrate: ${property.name}`, error)
    }
  }
  
  console.log('Properties migration complete!')
}

async function migratePages() {
  console.log('Migrating page content...')
  
  const pages = [
    {
      slug: 'om-oss',
      title: 'Om JMF',
      content: 'JMF är ett familjeföretag som förvaltar fastigheter i Piteå med omnejd...',
    },
    {
      slug: 'kontakt',
      title: 'Kontakta oss',
      content: 'Kontaktinformation för JMF...',
    },
  ]
  
  for (const page of pages) {
    try {
      await prisma.pageContent.upsert({
        where: { slug: page.slug },
        update: {
          title: page.title,
          content: page.content,
        },
        create: {
          slug: page.slug,
          title: page.title,
          content: page.content,
        },
      })
      console.log(`✓ Migrated page: ${page.title}`)
    } catch (error) {
      console.error(`✗ Failed to migrate page: ${page.title}`, error)
    }
  }
  
  console.log('Pages migration complete!')
}

async function main() {
  console.log('Starting data migration...')
  console.log('========================')
  
  await migrateNews()
  await migrateProperties()
  await migratePages()
  
  console.log('========================')
  console.log('Migration complete!')
  
  await prisma.$disconnect()
}

main().catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})
