import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HunitDocument = Hunit & Document;

@Schema()
export class Hunit {

    //@Prop()
    //id: string;             // unique identifier

    @Prop({ required: true })
    type: string;           // meat, vegetable, fruit, meal, herb, beer, wine, booze

    @Prop({ required: true })
    kind: string;           // deer, beef, hog, chili, broccoli, IPA, Bordeaux, Rum

    @Prop({ required: true })
    name: string;           // filet, bolognese, steak

    @Prop({ required: true })
    quantity: number;       // 499

    @Prop({ required: true })
    unit: string;           // gramm, litre, kilogramm

    @Prop()
    origin: string          // uk

    @Prop({ required: true })
    creation_date: Date;     // 2021-11-13

    @Prop()
    bestbefore_date: Date;   // 2021-12-31

    @Prop()
    state: string;          // raw, cooked, ingredient

    @Prop()
    tags: string[];         // present from Santa
}

export const HunitSchema = SchemaFactory.createForClass(Hunit);