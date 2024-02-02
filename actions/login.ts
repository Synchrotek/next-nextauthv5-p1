"use server";
import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { LoginSchema } from "@/schemas/inedx";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalild fields!" };
    }

    return { success: "Email sent1" };
}