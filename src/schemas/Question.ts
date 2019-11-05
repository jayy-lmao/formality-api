import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryGeneratedColumn
} from "typeorm";
import Form from "./Form";

@ObjectType()
@Entity()
class Question extends BaseEntity {

  @ObjectIdColumn()
  @Field()
  public id!: string;

  @ObjectIdColumn({ name: "id" })
  // tslint:disable-next-line: variable-name
  public _id!: string;

  @Column()
  @Field()
  public formId: string;

  @Column()
  @Field()
  public text: string;

  @Column()
  @Field()
  public questionType: "short_answer" | "multiple_choice";

  @Column()
  @Field(type => Form)
  public form: string;

  @Column()
  public userId: string;

  @Column()
  @Field(type => [String], {nullable: true})
  public options?: string[];
}

export default Question;
