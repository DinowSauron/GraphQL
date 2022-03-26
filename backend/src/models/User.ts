import { length } from "class-validator";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(_type => ID)
  id: string;
  
  @Field()
  // @length(5, 50)
  name: string;
}