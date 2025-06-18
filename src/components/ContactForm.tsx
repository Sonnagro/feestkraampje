import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Naam moet minimaal 2 karakters bevatten" }),
  email: z.string().email({ message: "Ongeldig e-mailadres" }),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9]*$/.test(val), {
      message: "Alleen cijfers toegestaan",
    }),
  subject: z
    .string()
    .min(2, { message: "Onderwerp moet minimaal 2 karakters bevatten" }),
  message: z
    .string()
    .min(10, { message: "Bericht moet minimaal 10 karakters bevatten" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      form.reset();
      toast.success(
        "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op."
      );
    }, 1500);
  }

  return (
    <Card className="shadow-md">
      <CardHeader className="bg-party-pink/10">
        <CardTitle className="font-display text-2xl tracking-wide">Neem contact op</CardTitle>
        <CardDescription>
          Vul het formulier in en we nemen zo snel mogelijk contact met je op
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Naam</FormLabel>
                    <FormControl>
                      <Input placeholder="Jouw naam" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mailadres</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jouw@email.nl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefoonnummer (optioneel)</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="Jouw telefoonnummer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Onderwerp</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Onderwerp van je bericht"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bericht</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Laat hier je bericht achter..."
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-party-pink hover:bg-party-purple text-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Verzenden...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Verstuur bericht
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-4 border-t pt-6">
        <div className="flex flex-col space-y-1">
          <h3 className="font-semibold">
            Andere manieren om contact op te nemen:
          </h3>
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="h-4 w-4 text-party-pink" />
            <a
              href="mailto:pascalle.d.j@icloud.com"
              className="hover:text-party-pink"
            >
              pascalle.d.j@icloud.com
            </a>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="h-4 w-4 text-party-pink" />
            <a href="tel:+31625542055" className="hover:text-party-pink">
              +31 06 25 54 20 55
            </a>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
