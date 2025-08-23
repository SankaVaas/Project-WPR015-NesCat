from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json

# Initialize FastAPI app
app = FastAPI(
    title="NesCat SaaS Marketplace API",
    description="Backend API for SaaS marketplace platform",
    version="1.0.0"
)

# CORS middleware for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class Product(BaseModel):
    id: int
    name: str
    category: str
    tagline: str
    description: str
    price: float
    originalPrice: Optional[float] = None
    billing: str
    features: List[str]
    gradient: str
    badge: Optional[str] = None
    rating: float
    users: str
    tags: List[str]

# Sample data (later replace with database)
SAMPLE_PRODUCTS = [
    {
        "id": 1,
        "name": "AI Note Summarizer",
        "category": "ai",
        "tagline": "Transform lengthy documents into concise summaries",
        "description": "Upload PDFs, research papers, or documents and get intelligent, structured summaries in seconds.",
        "price": 19,
        "originalPrice": 29,
        "billing": "month",
        "features": ["PDF Processing", "Multi-language Support", "Export Formats", "Batch Processing", "API Access"],
        "gradient": "from-blue-500 via-purple-500 to-pink-500",
        "badge": "Popular",
        "rating": 4.9,
        "users": "2.3k",
        "tags": ["AI", "Education", "Productivity"]
    },
    {
        "id": 2,
        "name": "Restaurant Chatbot Builder",
        "category": "business",
        "tagline": "24/7 customer service automation for restaurants",
        "description": "Create intelligent chatbots that handle reservations, menu questions, and orders.",
        "price": 39,
        "originalPrice": 59,
        "billing": "month",
        "features": ["Menu Integration", "Order Processing", "Reservation System", "Multi-platform Deploy", "Analytics"],
        "gradient": "from-green-400 via-blue-500 to-purple-600",
        "badge": "New",
        "rating": 4.8,
        "users": "890",
        "tags": ["Business", "Automation", "Customer Service"]
    },
    {
        "id": 3,
        "name": "AI Resume Generator Pro",
        "category": "ai",
        "tagline": "Land your dream job with AI-optimized resumes",
        "description": "Professional resume creation with ATS optimization and industry templates.",
        "price": 14,
        "originalPrice": 24,
        "billing": "month",
        "features": ["ATS Optimization", "50+ Templates", "AI Suggestions", "LinkedIn Integration", "Cover Letters"],
        "gradient": "from-orange-400 via-red-500 to-pink-500",
        "badge": "Best Seller",
        "rating": 4.9,
        "users": "5.2k",
        "tags": ["AI", "Career", "Templates"]
    }
]

# API Routes
@app.get("/")
async def root():
    return {
        "message": "NesCat SaaS Marketplace API is running!",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "NesCat API"}

@app.get("/api/products", response_model=List[Product])
async def get_products():
    """Get all products"""
    return SAMPLE_PRODUCTS

@app.get("/api/products/{product_id}", response_model=Product)
async def get_product(product_id: int):
    """Get a specific product by ID"""
    product = next((p for p in SAMPLE_PRODUCTS if p["id"] == product_id), None)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

@app.get("/api/products/category/{category}")
async def get_products_by_category(category: str):
    """Get products by category"""
    filtered_products = [p for p in SAMPLE_PRODUCTS if p["category"] == category]
    return filtered_products

@app.post("/api/products")
async def create_product(product: Product):
    """Create a new product"""
    # In real app, save to database
    new_product = product.dict()
    new_product["id"] = len(SAMPLE_PRODUCTS) + 1
    SAMPLE_PRODUCTS.append(new_product)
    return new_product

# Run with: uvicorn app.main:app --reload
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)