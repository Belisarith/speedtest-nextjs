FROM ubuntu:18.04

RUN apt update && apt install -y git && apt install -y curl &&apt install -y npm && npm i -g n && n 14.17.5 && apt install -y python3-pip

RUN pip3 install speedtest-cli

RUN  cd /home/ && git clone https://github.com/Belisarith/speedtest-nextjs.git

EXPOSE 3000

RUN cd /home/speedtest-nextjs/ && npm install && npm run build

WORKDIR /home/speedtest-nextjs/

CMD ["npm", "start"]