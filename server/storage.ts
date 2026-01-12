import { products, offers, inquiries, type Product, type Offer, type InsertInquiry } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getOffers(): Promise<Offer[]>;
  createInquiry(inquiry: InsertInquiry): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getOffers(): Promise<Offer[]> {
    return await db.select().from(offers);
  }

  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    await db.insert(inquiries).values(inquiry);
  }
}

export const storage = new DatabaseStorage();
