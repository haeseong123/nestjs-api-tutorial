// https://www.youtube.com/watch?v=GHTA143_b-s
// 54.45
import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(
        @Body() dto: AuthDto
    ) {
        console.log(
            dto.email,
            typeof dto.email,
            dto.password,
            typeof dto.password
        );


        return this.authService.signup()
    }

    @Post('signin')
    signin() {
        return this.authService.signin()
    }
}