import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { OfferCard } from "@/components/OfferCard";
import { QuoteForm } from "@/components/QuoteForm";
import { useProducts, useOffers } from "@/hooks/use-insurance";
import {
  ShieldCheck,
  Users,
  HeadphonesIcon,
  CheckCircle2,
  Phone,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import promoImage from "@assets/603914566_18418166449188673_8085109396950144801_n_1768301937802.jpg";

export default function Home() {
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: offers, isLoading: offersLoading } = useOffers();

  const scrollToQuote = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans rtl">
      <Navbar />

      {/* Promotional Banner - Clearly Labeled as Ad */}
      <div className="bg-slate-100 border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground font-arabic bg-slate-200 px-2 py-1 rounded">إعلان</span>
          </div>
          <a
            href="https://zzser.com/?label=cbb3dba68794e5c32e7e69dd0e073f56"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            data-testid="link-promo-banner"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src={promoImage}
                alt="تأميني معك - عرض تأمين خاص"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h1 className="text-white font-bold font-arabic text-4xl flex items-center gap-2 justify-end">
                  <ExternalLink className="w-4 h-4" />
                  اضغط هنا للحصول على عرضك
                </h1>
              </div>
            </motion.div>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-16 pb-24 md:pt-32 md:pb-32">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[90%] bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container  mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-primary font-bold text-sm font-arabic">
              <ShieldCheck className="w-4 h-4" />
              <span>شريكك الموثوق في التأمين</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold font-arabic text-secondary leading-tight">
              تأمينك <span className="text-primary">أمانك</span>
              <br />
              ومستقبل عائلتك
            </h1>

            <p className="text-xl text-muted-foreground font-arabic leading-relaxed max-w-lg">
              نقدم لك أفضل حلول التأمين التي تناسب احتياجاتك وميزانيتك. حماية
              شاملة لك ولعائلتك وممتلكاتك بأفضل الأسعار.
            </p>

            <div className="flex items-center gap-6 pt-8 text-sm text-muted-foreground font-arabic border-t border-border/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>سهولة المطالبات</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>دعم فني ٢٤/٧</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>تغطية شاملة</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Descriptive Unsplash Image: Happy family protected concept */}
            {/* HTML Comment: Happy family standing together outdoors safely */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=800&q=80"
                alt="Happy Family"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-xl animate-bounce duration-1000">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-arabic">
                    عملاء سعداء
                  </p>
                  <p className="text-2xl font-bold text-secondary">+١٠,٠٠٠</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offers Section - Highlighted */}
      <section id="offers" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold font-arabic tracking-wider">
              عروض حصرية
            </span>
            <h2 className="text-4xl font-bold font-arabic text-secondary">
              عروضنا المميزة لهذا الشهر
            </h2>
            <p className="text-muted-foreground font-arabic max-w-2xl mx-auto text-lg">
              لا تفوت فرصة الاستفادة من خصوماتنا الحصرية على باقات التأمين
              المختلفة لفترة محدودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offersLoading ? (
              // Loading Skeletons
              Array(2)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-64 bg-slate-100 rounded-2xl animate-pulse"
                  />
                ))
            ) : offers?.length ? (
              offers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  title={offer.title}
                  description={offer.description}
                  discount={offer.discount}
                  validUntil={offer.validUntil?.toString()}
                  onClick={scrollToQuote}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-slate-50 rounded-2xl">
                <p className="text-muted-foreground font-arabic">
                  لا توجد عروض حالياً، تابعنا قريباً!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-20 bg-primary text-white rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2 font-arabic">+٥٠٠٠</h3>
              <p className="text-primary-foreground/80 font-arabic">
                عميل يثق بنا
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2 font-arabic">٩٨٪</h3>
              <p className="text-primary-foreground/80 font-arabic">
                نسبة رضا العملاء
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
              <HeadphonesIcon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-3xl font-bold mb-2 font-arabic">٢٤/٧</h3>
              <p className="text-primary-foreground/80 font-arabic">
                دعم فني متواصل
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-arabic text-secondary">
              خدمات التأمين الشاملة
            </h2>
            <p className="text-muted-foreground font-arabic max-w-2xl mx-auto text-lg">
              نغطي جميع جوانب حياتك لضمان راحة بالك. اختر من باقاتنا المتنوعة ما
              يناسبك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsLoading ? (
              Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="h-64 bg-white rounded-2xl animate-pulse shadow-sm"
                  />
                ))
            ) : products?.length ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  description={product.description}
                  icon={product.icon}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground font-arabic">
                جاري إضافة الخدمات...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-right space-y-6">
            <h2 className="text-4xl font-bold font-arabic text-secondary">
              جاهز للحصول على عرض؟
            </h2>
            <p className="text-muted-foreground font-arabic text-lg leading-relaxed">
              فريقنا جاهز للرد على استفساراتك وتقديم أفضل عرض سعر يناسب
              احتياجاتك. املأ النموذج وسنتواصل معك في أقرب وقت.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-arabic">
                    اتصل بنا مباشرة
                  </p>
                  <p className="text-xl font-bold font-arabic dir-ltr text-right">
                    9200 00000
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-border">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-arabic">
                    ضمان أفضل سعر
                  </p>
                  <p className="text-lg font-bold font-arabic">
                    قارن واحصل على أفضل صفقة
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white pt-16 pb-8 font-arabic text-right">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">أمانك للتأمين</span>
              </div>
              <p className="text-slate-400 max-w-sm leading-relaxed">
                شركة رائدة في مجال خدمات التأمين في المملكة. نسعى لتقديم حلول
                مبتكرة تضمن حماية عملائنا وممتلكاتهم بأعلى معايير الجودة.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">
                روابط سريعة
              </h4>
              <ul className="space-y-4 text-slate-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    عن الشركة
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a
                    href="#offers"
                    className="hover:text-white transition-colors"
                  >
                    العروض
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الأسئلة الشائعة
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">
                تواصل معنا
              </h4>
              <ul className="space-y-4 text-slate-300">
                <li>شارع العليا، الرياض</li>
                <li>المملكة العربية السعودية</li>
                <li dir="ltr" className="text-right">
                  info@amanak.com
                </li>
                <li dir="ltr" className="text-right">
                  +966 11 000 0000
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © ٢٠٢٤ أمانك للتأمين. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
