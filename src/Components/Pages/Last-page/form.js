import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button/Button";

const Itemform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    reset();
  };
  return (
    <form className="itemform" onSubmit={handleSubmit(onSubmit)}>
      <div className="la">
        <input
          {...register("firstName", { required: "Напишите имя" })}
          className="form-control"
          placeholder="Name"
        />
        <div className="form-error">
          {errors?.firstName && <p>{errors?.firstName?.message}</p>}
        </div>
      </div>

      <div className="la">
        <input
          {...register("lastName", { required: "Заполните форму" })}
          className="form-control"
          placeholder="Company Name"
        />
        <div className="form-error">
          {errors?.lastName && <p>{errors?.lastName?.message}</p>}
        </div>
      </div>

      <div className="la">
        <input
          {...register("Email", { required: "Заполните форму" })}
          className="form-control"
          placeholder="Email"
        />
        <div className="form-error">
          {errors?.Email && <p>{errors?.Email?.message}</p>}
        </div>
      </div>

      <div className="la">
        <input
          {...register("Phone", { required: false })}
          className="form-control"
          placeholder="Phone"
        />
        <div className="">{errors?.Phone && <p>Error</p>}</div>
      </div>

      <div className="la">
        <input
          {...register("Servica", { required: "Заполните форму" })}
          className="form-control"
          placeholder="Servica looking for"
        />
        <div className="form-error">
          {errors?.Servica && <p>{errors?.Servica?.message}</p>}
        </div>
      </div>

      <div className="la">
        <input
          {...register("Industry", { required: "Заполните форму" })}
          className="form-control"
          placeholder="Industry"
        />
        <div className="form-error">
          {errors?.Industry && <p>{errors?.Industry?.message}</p>}
        </div>
      </div>

      <input
        {...register("Massage ", { required: true, maxLength: 20 })}
        className="message"
        placeholder="Massage"
      />
      <div className="sub">
        <Button class="btn middle" text="Submit" />
      </div>
    </form>
  );
};

export default Itemform;
