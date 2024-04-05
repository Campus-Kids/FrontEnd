import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import FeatureCard from "../cards/feature-card";
import featuresData from "../../data/features-data";
import { RectangleGroupIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle } from "../layout/page-title";
import {teamData} from "../../data/team-data";
import TeamCard from "../cards/team-card";


const Home = () => {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/niñosHome.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Ofrecemos diferentes programas para niños donde el amor es un
                estilo de vida..
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Desde Campus Kids trabajamos para satisfacer las necesidades
                tanto de nuestros socios como de todas las personas que elijan
                nuestras instalaciones para que sus hijos se eduquen, se formen
                y crezcan en el mejor de los ambientes.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center text-left">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <RectangleGroupIcon className="h-8 w-8 text-black " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Sobre Nosotros
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Campus Kids apoya el aprendizaje a través del juego y crea
                experiencias de aprendizaje para los niños basadas en sus
                intereses siguiendo un plan de estudios emergente. Creemos que
                los niños están muy motivados y se sienten involucrados
                activamente en su propio aprendizaje cuando tienen un sentido de
                pertenencia, bienestar y se les brindan amplias oportunidades de
                expresión y participación.
              </Typography>
              <Button variant="filled" className="bg-[#385bbb]">Leer más</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/mapa.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Ubicación
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Mira nuestra ubicación, visitanos y conoce nuestra sede.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle
            section="Nuestro Equipo"
            heading="Aquí están nuestros heroes"
          >
            Contamos con un equipo dedicado y comprometido que se esfuerza por
            proporcionar a los padres las mejores opciones de cuidado infantil.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
                
              <TeamCard              
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>      
    </>
  );
};

export default Home;
