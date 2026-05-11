create database Projeto;

use Projeto;

create table Bd (
id int primary key auto_increment,
Nome varchar(45),
email varchar(45),
senha varchar(45)
);

select * from Bd;


create table Pontuacao (
    id int primary key auto_increment,
    id_usuario int,
    banda varchar(45),
    pontos int,
    data_registro datetime default now(),
    foreign key (id_usuario) references Bd(id)
);

select sum(pontos), banda from Pontuacao 
group by banda;

select count(banda), banda from Pontuacao
group by banda;

select p.pontos, u.Nome, p.banda from Pontuacao p 
join Bd u on p.id_usuario = u.id; 

select b.nome as Jogador, sum(p.pontos) as Pontos from Bd b
join Pontuacao p on p.id_usuario = b.id
group by p.id_usuario
order by Pontos desc
limit 5;


select sum(pontos) as Total from Pontuacao;	
select count(id_usuario) as Total from Pontuacao;	
	select * from Pontuacao;
truncate Pontuacao;