# 1. Küçük ve hızlı bir Web Sunucusu (Nginx) kullan
FROM nginx:alpine

# 2. Bizim dosyaları sunucunun içine kopyala
COPY . /usr/share/nginx/html

# 3. 80 portunu dışarı aç (Web siteleri genelde buradan çalışır)
EXPOSE 80

# 4. Sunucuyu başlat
CMD ["nginx", "-g", "daemon off;"]