import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const wynikiDir = path.join(process.cwd(), 'public', 'wyniki')
  
  try {
    const files = fs.readdirSync(wynikiDir)
    const images = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort()
      .map(file => ({
        src: `/wyniki/${file}`,
        alt: 'Wynik tradingowy'
      }))
    
    return NextResponse.json(images)
  } catch (error) {
    return NextResponse.json([])
  }
}

