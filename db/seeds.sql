
USE farmers_market;

INSERT INTO ProductCategories (category,createdAt,updatedAt) VALUES
("meat",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
("greens",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
("dairy",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO products (title,slug,description,price,unit,image,stock,createdAt,updatedAt,ProductCategoryId) VALUES 
("Butter","organic-butter","Being certified organic means our butter is produced from milk without the use of pesticides, herbicides, hormones or antibiotics. Our organic milk is not homogenised which means that we have kept the milk in its most natural state.",3.59,"ea","http://place-hold.it/150",59,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,3),
("Eggs","free-range-eggs","Freerange eggs are laid on our supplier's family farm and delivered to customers within a day or two . They don't come fresher than that. Because the hens are raised on pasture with a natural diet and total free range access 24/7, there are no tastier eggs.",6,"ea","http://place-hold.it/150",25,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,3),
("Chicken","free-range-chicken","We grow our chickens slowly and naturally — just how nature intended. We've spent years finding the best produce with truly unique textures and flavours, now recognised by some of Australia’s best chefs and restaurants.",23,"kg","http://place-hold.it/150",9,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1),
("Beef","organic-beef","While less hefty on the plate than the bone-in variety, our Scotch fillet or boneless rib steak requires less carving without compromise to flavour or texture. With the rib bone removed, these steaks cook in less time and are the ultimate in convenience.",15,"kg","http://place-hold.it/150",96,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,1),
("Carrots","organic-carrot","Our Organic Carrots are bursting with flavour and nutritional benefits such as vitamin A, folic acid, silicon, potassium, and magnesium.
A family favourite and great in salads, soups, juiced or simply cut up and enjoy.",5,"kg","http://place-hold.it/150",45,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2),
("Potatoes","organic-potatoes","Dutch creams - The queen of potatoes! They're a large waxy oval potato with yellow flesh, thin skin and a rich, buttery taste. They make gorgeous mash or are equally delicious boiled, roasted, baked and pureed.",4,"kg","http://place-hold.it/150",59,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2),
("Apples","organic-apples","Delicious Peninsula grown apples are grown without the use of chemicals.  They taste delicious!
Great for a snack or for the lunch box.
Mornington Peninsula Grown",4,"kg","http://place-hold.it/150",38,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,2);

