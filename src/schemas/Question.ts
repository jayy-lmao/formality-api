import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import Form from "./Form";

@ObjectType()
@Entity()
class Question extends BaseEntity {
    // @PrimaryGeneratedColumn()
    // @Field((type) => ID)
    // public id: number;

    @ObjectIdColumn()
    @Field()
    public id!: string;
  
    @ObjectIdColumn({ name: 'id' })
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
    public questionType: string;

    @Column()
    @Field((type) => Form)
    public form: string;
}

export default Question;
