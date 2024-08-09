import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Controller('products')
export class ProductsController {
    // @UseGuards(LocalAuthGuard)
    // @UseGuards(AuthGuard('jwt'))
    @UseGuards(JwtAuthGuard)
    
    @Get('iphone')
    me(@Req() request: Request){
        // console.log(JSON.stringify(Object.keys(request)))
        console.log(request.user)
        return "hi"
    }
    
}
