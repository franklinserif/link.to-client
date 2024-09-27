import { FC } from "react";
import Image from "next/image";

export const Hero: FC = () => {
  return (
    <section className="w-full min-h-[500px] pb-5 px-5 flex items-center flex-col bg-white z-10 max-">
      <h2 className="text-5xl font-bold text-main">Main Features</h2>
      <div className="max-w-[1181px] w-full">
        <p className="text-secondary w-full text-justify mt-8">
          Acorta, Gestiona y Analiza tus Enlaces Fácilmente Bienvenido a nuestra
          plataforma de acortamiento de enlaces, diseñada para simplificar la
          gestión de tus URLs y ayudarte a obtener información valiosa sobre tus
          enlaces. Con nosotros, podrás: Acortar tus enlaces en un solo clic,
          transformando URLs largas y complejas en enlaces cortos y fáciles de
          compartir.
          <br />
          <br />
          Registrar tu cuenta para acceder a un dashboard personalizado donde
          podrás gestionar todos los enlaces que has creado. Monitorear tus
          enlaces con estadísticas detalladas, incluyendo la cantidad de visitas
          que recibe cada enlace. Gestionar enlaces temporales que caducan
          automáticamente para mantener tu base de datos organizada.
        </p>

        <div className="w-full flex flex-wrap lg:flex-nowrap  gap-5 justify-center items-center mt-[81px]">
          <div className="w-full flex items-center flex-col">
            <picture className="h-[60px] w-[60px] relative">
              <Image src="/clock.svg" fill alt="Monitoring 24/7" />
            </picture>
            <span className="font-bold text-main mt-[28px]">
              Monitoring 24/7
            </span>
            <p className="max-w-[500px] text-secondary text-center mt-4">
              Monitorear tus enlaces con estadísticas detalladas, Gestionar
              enlaces temporales, visitas e información especifica.
            </p>
          </div>

          <div className="w-full flex items-center flex-col">
            <picture className="h-[60px] w-[60px] relative">
              <Image src="/computer.svg" fill alt="Monitoring 24/7" />
            </picture>
            <span className="font-bold text-main mt-[28px]">
              Registrar tu cuenta
            </span>
            <p className="max-w-[500px] text-secondary text-center mt-4">
              Accede a un dashboard personalizado donde podrás gestionar todos
              los enlaces que has creado.
            </p>
          </div>

          <div className="w-full flex items-center flex-col">
            <picture className="h-[60px] w-[60px] relative">
              <Image src="/rocket.svg" fill alt="Monitoring 24/7" />
            </picture>
            <span className="font-bold text-main mt-[28px]">
              Acortar tus enlaces
            </span>
            <p className="max-w-[500px] text-secondary text-center mt-4">
              Solo un clic, transformando URLs largas y complejas en enlaces
              cortos y fáciles de compartir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
