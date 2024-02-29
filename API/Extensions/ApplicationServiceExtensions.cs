using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            // add db  context
            var connectionString = config.GetConnectionString("DefaultConnection");
            services.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(connectionString);
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            //Add Meiator for dependency injection
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));

            // Add AutoMapper
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}