using System;
using System.Diagnostics;
using MediatR;

namespace Application.Activities.Queries;

public class GetActivityDetails
{
    public class Query : IRequest<Activity>
    {
        public string Id { get; set; }
    }
}
