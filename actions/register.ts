"use server";
import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { RegisterSchema } from "@/schemas/inedx";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalild fields!" };
    }

    return { success: "Email sent1" };
}