import sanityClient from '@/sanity/lib/sanity';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    // Parse the incoming JSON data from the request body
    const { name, title, rating, reviewText, image } = await req.json();

    // Create a new document in Sanity
    const reviewDoc = await sanityClient.create({
      _type: 'comment',
      clientName: name,
      clientTitle: title,
      rating: parseInt(rating),
      Comment: reviewText,
      mainImage: image,
      submittedAt: new Date().toISOString(),
    });

    // Return a JSON response on success
    return NextResponse.json(
      { message: 'Review submitted successfully', reviewDoc },
      { status: 200 }
    );
  } catch (error) {
    console.error('Review submission error:', error);
    // Return a JSON response on error
    return NextResponse.json(
      { error: 'Error submitting review' },
      { status: 500 }
    );
  }
}

// Optionally, handle GET requests (if needed)
export async function GET(req) {
    try {
      const reviews = await sanityClient.fetch(`*[_type == 'comment'] | order(submittedAt desc)`);
      return NextResponse.json({ reviews }, { status: 200 });
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return NextResponse.json({ error: 'Error fetching reviews' }, { status: 500 });
    }
  }
