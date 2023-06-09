'use client';

import { data } from "autoprefixer";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Input from "../../components/input/Input";
import Button from "@/app/components/Button";

type Variant = 'LOGIN' | 'REGISTER';


const AuthFrom = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
            if(variant === 'LOGIN'){
                setVariant('REGISTER');
            }else {
                setVariant('LOGIN');
            }
    }, [variant]);


        const {
            register,
            handleSubmit,
            formState: {
                errors
            }
        } = useForm<FieldValues>({
            defaultValues: {
                name: '',
                email: '',
                password: ''
            }
        });

        const onSubmit: SubmitHandler<FieldValues> = (data) => {
            setIsLoading(true);

            if(variant === 'REGISTER')
            {
                //NextAuth register
            }

            if(variant === 'LOGIN')
            {
                //NextAuth Signin
            }
        }

        const socialAction = (action: String) => {
            setIsLoading(true);

            //nextauth social  sign in
        }

    return (
        <div className="
            mt-8
            sm:mx-auto
            sm:w-full
            sm:max-w-md

        "
        >
            <div className="
                bg-white
                px-4
                py-8
                shadow
                sm:rounded-lg
                sm:px-10
            "
            >
                <form 
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input 
                            id="name" 
                            label="Name" 
                            register={register} 
                            errors={errors}
                            />
                    )}
                        <Input 
                                id="email" 
                                label="Email address"
                                type="email" 
                                register={register} 
                                errors={errors}
                                />

                        <Input 
                            id="password" 
                            label="Password" 
                            type="password"
                            register={register} 
                            errors={errors}
                            />

                        <div>
                            <Button>Test</Button>
                        </div>
                </form>

            </div>

        </div>
     );
}

export default AuthFrom;