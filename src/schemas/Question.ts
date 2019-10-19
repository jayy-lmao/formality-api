import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Form from "./Form";

@ObjectType()
@Entity()
class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field((type) => ID)
    public id: number;

    @Column()
    @Field()
    public formId: number;

    @Column()
    @Field()
    public text: string;

    @Column()
    @Field()
    public questionType: string;

    @Column()
    @Field((type) => Form)
    public form: number;
}

export default Question;
