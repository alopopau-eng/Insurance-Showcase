import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { products, offers } from "@shared/schema";
import { db } from "./db";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.products.list.path, async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.offers.list.path, async (_req, res) => {
    const offers = await storage.getOffers();
    res.json(offers);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input" });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    await db.insert(products).values([
      { name: "تأمين السيارات", description: "تغطية شاملة لسيارتك ضد الحوادث والسرقة", icon: "Car" },
      { name: "تأمين صحي", description: "رعاية صحية لك ولعائلتك في أفضل المستشفيات", icon: "Heart" },
      { name: "تأمين المنازل", description: "حماية منزلك وممتلكاتك من المخاطر", icon: "Home" },
      { name: "تأمين السفر", description: "سافر براحة بال مع تغطية الطوارئ الطبية", icon: "Plane" },
    ]);
  }

  const existingOffers = await storage.getOffers();
  if (existingOffers.length === 0) {
    await db.insert(offers).values([
      { 
        title: "عرض العائلة", 
        description: "احصل على خصم عند تأمين سيارتين أو أكثر", 
        discount: "خصم ١٠٪",
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
      },
      { 
        title: "خصم السائق المثالي", 
        description: "سجل نظيف من الحوادث؟ استمتع بأسعار خاصة", 
        discount: "خصم ٢٠٪",
        validUntil: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)
      },
    ]);
  }
}
