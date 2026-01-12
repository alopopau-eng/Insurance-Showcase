import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-insurance";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export function QuoteForm() {
  const mutation = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "auto",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <div className="bg-card rounded-2xl shadow-xl shadow-black/5 border border-border p-6 md:p-8">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold font-arabic text-foreground">اطلب عرض سعر</h3>
        <p className="text-muted-foreground font-arabic mt-2">املأ النموذج وسنتواصل معك بأفضل العروض</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 rtl">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="font-arabic text-right">
                <FormLabel>الاسم الكامل</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسمك" {...field} className="text-right h-12 bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="font-arabic text-right">
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} className="text-right h-12 bg-background" dir="ltr" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="font-arabic text-right">
                  <FormLabel>رقم الجوال</FormLabel>
                  <FormControl>
                    <Input placeholder="05xxxxxxxx" {...field} className="text-right h-12 bg-background" dir="ltr" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="font-arabic text-right">
                <FormLabel>نوع التأمين</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 bg-background flex-row-reverse">
                      <SelectValue placeholder="اختر نوع التأمين" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="font-arabic" align="end">
                    <SelectItem value="auto">تأمين السيارات</SelectItem>
                    <SelectItem value="health">تأمين صحي</SelectItem>
                    <SelectItem value="home">تأمين المنازل</SelectItem>
                    <SelectItem value="travel">تأمين السفر</SelectItem>
                    <SelectItem value="life">تأمين الحياة</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="font-arabic text-right">
                <FormLabel>ملاحظات إضافية (اختياري)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="اكتب أي تفاصيل إضافية هنا..." 
                    className="min-h-[100px] resize-none bg-background text-right" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-bold font-arabic shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all mt-4"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> جاري الإرسال...</>
            ) : (
              <><Send className="mr-2 h-5 w-5 ml-2" /> إرسال الطلب</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
