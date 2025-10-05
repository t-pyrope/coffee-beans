import { neon } from '@netlify/neon';
import { NextResponse } from 'next/server';

const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL

export async function GET() {
    const coffees = await sql`SELECT * FROM coffee_types`;
    return NextResponse.json(coffees);
}