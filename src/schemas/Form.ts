import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import Question from "./Question";
import User from "./User";

@ObjectType()
@Entity()
class Form extends BaseEntity {
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
    public title: string;

    @Column()
    @Field()
    public description: string;

    @Field((type) => [ Question ])
    public questions: Question[];

    @Column()
    public userId: string;
}

export default Form;
